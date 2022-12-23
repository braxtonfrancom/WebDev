from http.server import HTTPServer, BaseHTTPRequestHandler
from time import strftime


class CS2610Assn1(BaseHTTPRequestHandler):
    """
    Your task is to define this class such that it fulfills the assingment
    requirements.

    Refer to the official Python documentation for the `http.server` class for
    details on what can go in here.

    Replace this pass statement with your own code:
    """
    def do_GET(self):
        print(f"The browser made a GET request to {self.path}")
        print("it sent these headers:")
        for header in self.headers:
            print(f"\t{header} => {self.headers[header]}")

        self.wfile.write(b"HTTP/1.0 200 OK\n")
        self.wfile.write(b"Server: Erik's Cool Server\n")
        self.wfile.write(bytes(f'Date: {strftime("%c")}\n', "utf-8"))
        self.wfile.write(b"Content-Type: text/html; charset=UTF-8\n")
        self.wfile.write(b"\n")
        self.wfile.write(b"""<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Welcome to my cool server</title>
    </head>
    <body>
        <h1>This is Erik's cool server</h1>
        <p>Spelling is optional.  Go out and make your own, why don't ya?</p>
    </body>
</html>\n""")




##   Last-Modified: Tue, 09 Nov 2021 04:00:06 GMT
##   Accept-Ranges: bytes
##   Connection: close
##   Content-Length: 6330



if __name__ == '__main__':
    server_address = ('localhost', 8000)
    print(f"Serving from http://{server_address[0]}:{server_address[1]}")
    print("Press Ctrl-C to quit\n")
    try:
        HTTPServer(server_address, CS2610Assn1).serve_forever()
    except KeyboardInterrupt:
        print(" Exiting")
        exit(0)


