#!/bin/bash
cd `dirname $0`

# inode   a data structure that contains metadata about a file. inode contains a pointer to that data

# inode table
df -i

# inode number      each inode has a unique number
ls -li

# directory is a special kind of file that contains a table which maps filenames to inodes.
ls -ali

[ -f ../fixtures/test_link ] && rm ../fixtures/test_link
[ -f ../fixtures/test_link2 ] && rm ../fixtures/test_link2
[ -f ../fixtures/test_link3 ] && rm ../fixtures/test_link3

echo "hello" > ../fixtures/test_link

# when create a hard link to a file, an extra entry is added in the directory. A new file name is mapped to an existing inode.
ln ../fixtures/test_link ../fixtures/test_link2

# symbolic links do not link to inodes, but creats a name to name mapping.
# permissions on a symbolic links have no meaning. They can link anywhere

ln -s ../fixtures/test_link ../fixtures/test_link3

ls -li ../fixtures
