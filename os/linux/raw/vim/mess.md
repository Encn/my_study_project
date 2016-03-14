print it and paste on the wall!
http://cenalulu.github.io/linux/all-vim-cheatsheat/

go to prev file

```
CTRL + ^
```

set t_Co=256
syntax on
set background=dark
colorscheme delek

find colors in /usr/share/vim/vim72/colors

## comment out blockd in vim

http://stackoverflow.com/questions/1676632/whats-a-quick-way-to-comment-uncomment-lines-in-vim

To comment out blocks in vim:
press Esc (to leave editing or other mode)
hit ctrl+v (visual block mode)
use the up/down arrow keys to select lines you want (it won't highlight everything - it's OK!)
Shift+i (capital I)
insert the text you want, i.e. '% '
press Esc
Give it a second to work.

To uncomment blocks in vim:
press Esc (to leave editing or other mode)
hit ctrl+v (visual block mode)
use the up/down arrow keys to select the lines to uncomment.
If you want to select multiple characters, use one or combine these methods:

use the left/right arrow keys to select more text
to select chunks of text use shift + left/right arrow key
you can repeatedly push the delete keys below, like a regular delete button
press d or x to delete characters, repeatedly if necessary

press Esc

Give it a second to work.
