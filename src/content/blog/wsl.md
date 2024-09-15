---
title: "Development environment with Windows"
description: "Learn how to use the Windows Subsystem for Linux (WSL) to have a development environment in Windows"
pubDate: "Nov 20 2023"
heroImage: "../img/img_blog/portadaWSl.webp"
---

With the Windows Subsystem for Linux (WSL), you can run a GNU/Linux environment directly from Windows without dealing with virtual machines or rebooting the system. This means you can enjoy the command line, utilities, and Linux applications hassle-free. Incredible, right?! 😉

## Steps to Verify WSL Installation

1. Open the Run dialog with `Windows + R`.
2. Type CMD to open the terminal.
3. Type `winver` to check if you have version 2004 Build 19041 or later.

## Installing Windows Subsystem for Linux

1. Run Windows PowerShell as an administrator.
2. Follow the [Windows guide](https://learn.microsoft.com/en-us/windows/wsl/install) for installation commands.
3. To install, run the command: `wsl --install`
4. Set WSL version 2 as default: `wsl --set-default-version 2`
5. If this fails, [update the kernel](https://learn.microsoft.com/en-us/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package).
6. Run the command again: `wsl --set-default-version 2`
7. Open the Microsoft Store and install the latest version of Ubuntu.
8. It will start installing when you open it.

![WSL Installation Screenshot](/img/img_blog/ejemploWSLterminal.webp)
**Note:** If it still doesn't work, you may need to enable virtualization in the BIOS.

## Installing Windows Terminal

### Install VS Code on Windows

You should have Visual Studio Code installed ON WINDOWS.

If you don't have it, install it [HERE](https://code.visualstudio.com/download).

Once VS Code is installed, search for the WSL plugin, or install it here:

[HERE](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl) you can install the WSL plugin.

You need to connect WSL to VS Code. Remember that all your extensions and themes for VS Code should also be installed in WSL.

## Basic Bash Terminal Commands

Basic terminal commands:

- `pwd`: Shows the current directory path.
- `mkdir`: Creates directories (e.g., `mkdir Important-Folder`).
- `touch`: Creates files (e.g., `touch file.txt`).
- `rm`: Deletes a file or directory (e.g., `rm file.txt`). Be cautious with this command as it can delete everything on your disk.
- `cat`: Displays the content of a file (e.g., `cat file-name.txt`).
- `ls`: Lists files in the current directory. You can use one or more arguments for additional information about these files.
  - `ls -a`: Show all files, including hidden ones.
  - `ls -l`: View files as a list.
- `cd`: Changes directories.
  - `cd /`: Go to the root directory.
  - `cd ~`: Go to your user directory.
  - `cd folder/subfolder`: Navigate to a path within the current directory.
  - `cd ..`: Move up one directory level.
- `history`: View the recent commands executed and a special number to repeat them.
- `! + number`: Execute a command with the number shown by the `history` command (e.g., `!72`).
- `clear`: Clears the terminal. You can also use the keyboard shortcuts Ctrl + L or Command + L.

## Customizing our terminal

Now we have to install ZSH, an alternative to bash, which allows us to install themes and plugins

```bash
apt install zsh
```

Sometimes it will be necessary to install giving administrator permissions, in this way:

```bash
sudo apt install zsh
```

Volver ZSH default:

```bash
chsh -s $(which zsh)
```

Close and open the terminal to see the changes made.

### After having zsh installed, we can install Oh my zsh

Install oh-my-zsh via curl

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Install oh-my-zsh via wget

```bash
sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
```

Oh My ZSH Official site: [Go to the site](https://ohmyz.sh/)

Now we can install the themes in this repository [go to the repo.](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes)

**_Powerlevel10k_** is my favorite theme (And many's) if you want to install it, you can do it with this command:

```bash
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

You will need this SOURCE: [Download Source](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Regular.ttf)

To set your Theme, you must position yourself at the Home of your terminal, and open `.zshrc` in your preferred code editor. In my case I use Visual Studio Code. Therefore I just have to run the following command:

```bash
code .zshrc
```

Now you must locate in the file `ZSH_THEME =` and add your theme as follows:

```zshrc
ZSH_THEME='powerlevel10k/powerlevel10k'
```

> To start installing the plugins, remember to follow the steps of the video. Remember that each plugin has its own documentation and installation method.

Oh My ZSH Sitio oficial: [Ir al sitio](https://ohmyz.sh/)

[Here](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes) we can install the themes in this repository

## To start installing the plugins we must access this repository

PLUGINS: [Go to the repository](https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins)

- colorize (They are already installed)

- git (They are already installed)

To install these plugins, just position yourself in the home and paste these codes:

- zsh-autosuggestions:

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions.git $ZSH_CUSTOM/plugins/zsh-autosuggestions

```

- zsh-syntax-highlighting

```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting
```

- fast-syntax-highlighting

```bash
git clone https://github.com/zdharma-continuum/fast-syntax-highlighting.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/plugins/fast-syntax-highlighting
```

-zsh-autocomplete

```bash
git clone --depth 1 -- https://github.com/marlonrichert/zsh-autocomplete.git $ZSH_CUSTOM/plugins/zsh-autocomplete
```

Inside your `.zshrc` configuration file and locate this section: `plugins = (git)`.

You should add your plugins within the parenthesis so that they look like this: `plugins = (git zsh-autosuggestions zsh-syntax-highlighting fast-syntax-highlighting zsh-autocomplete)`

[Go to the repository](https://gist.github.com/n1snt/454b879b8f0b7995740ae04c5fb5b7df)

## Alias

Aliases must have a format like this example:

## Conclusion

Remember that you have the videos to follow step by step and everything works correctly.
