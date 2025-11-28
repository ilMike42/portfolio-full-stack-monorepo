{
  description = "Node + Nx monorepo";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
        };

        # Pick your Node version here
        nodejs = pkgs.nodejs_20;
      in
      {
        devShells.default = pkgs.mkShell {
          name = "node-nx-shell";

          buildInputs = [
            nodejs
            pkgs.pnpm         # or pkgs.yarn / pkgs.nodePackages.npm
            pkgs.watchman     # optional: improves Nx file watching
            pkgs.flyctl
          ];

          # Add Nx to PATH using pnpm or npm install
          shellHook = ''
            if [ ! -d node_modules ]; then
              echo "Installing dependencies (pnpm)..."
              pnpm install --frozen-lockfile || true
            fi

            export PATH="$PWD/node_modules/.bin:$PATH"
            echo "Node version: $(node -v)"

            exec zsh
          '';
        };

        # Optional: a build step for CI so you can run `nix build`
        packages.default = pkgs.stdenv.mkDerivation {
          name = "nx-build";
          src = ./.;

          buildInputs = [
            nodejs
            pkgs.pnpm
          ];

          buildPhase = ''
            pnpm install --frozen-lockfile
            pnpm nx build
          '';

          installPhase = ''
            mkdir -p $out
            cp -r dist/* $out/
          '';
        };
      });
}

