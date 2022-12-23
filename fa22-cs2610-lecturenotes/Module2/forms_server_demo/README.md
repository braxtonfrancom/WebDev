# Form POST server demo

[server.py](./server.py) demonstrates how an HTTP server might accept POST requests from a browser, and what the data it receives would look like.

If you run the server with this shell command, it will automatically restart itself when you visit it's `/exit` path.

```
$ while sleep .25; do python server.py; echo Restarting...; done
```

To stop the server, press `Ctrl-C` twice in quick succession.
