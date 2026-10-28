{
  description = "Development environment for willyrgf.com";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";

  outputs = { nixpkgs, ... }:
    let
      systems = [
        "x86_64-linux"
        "aarch64-linux"
        "aarch64-darwin"
      ];
      forAllSystems = nixpkgs.lib.genAttrs systems;
    in
    {
      devShells = forAllSystems (system:
        let
          pkgs = nixpkgs.legacyPackages.${system};
        in
        {
          default = pkgs.mkShellNoCC {
            packages = [ pkgs.nodejs_24 ];
          };
        }
      );

      apps = forAllSystems (system:
        let
          pkgs = nixpkgs.legacyPackages.${system};
          dev = pkgs.writeShellApplication {
            name = "dev";
            runtimeInputs = [ pkgs.nodejs_24 ];
            text = ''
              npm ci
              exec npm run dev -- "$@"
            '';
          };
        in
        {
          dev = {
            type = "app";
            program = "${dev}/bin/dev";
            meta.description = "Install dependencies and start the Astro development server";
          };
        }
      );
    };
}
