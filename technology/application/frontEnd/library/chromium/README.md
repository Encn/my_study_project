## resources

https://www.chromium.org/

### set up

- depot_tools

```
$ git clone https://chromium.googlesource.com/chromium/tools/depot_tools.git

$ export PATH=$PATH:/path/to/depot_tools
```

- checkout source

```
$ fetch --nohooks chromium
```

- install any necessary dependencies

At linux:

```
$ ./build/install-build-deps.sh
```

At mac:

https://chromium.googlesource.com/chromium/src/+/master/docs/mac_build_instructions.md

- run post-sync hooks

Run post-sync hooks at the source root directory.

```
$ gclient runhooks
```

- GYP build

```
$ ./build/gyp_chromium -Dcomponent=shared_library

$ ninja -C out/Debug chrome
```

fix `ld: file not found: @rpath/libchrome_main_dll.dylib for architecture x86_64` problem

`cd out/debug && ln -s . @rpath`

## enable debug log

```
open Chromium.app --args --enable-logging --v=1
```

In debug directory, `tail -f chromium_debug.log`
