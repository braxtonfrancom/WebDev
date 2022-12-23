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
        # print("it sent these headers:")
        # for header in self.headers:
        #     print(f"\t{header} => {self.headers[header]}")

        if self.path == '/':
            self.wfile.write(b"HTTP/1.0 200 OK\n")
            self.wfile.write(b"Server: Erik's Cool Server\n")
            self.wfile.write(bytes(f'Date: {strftime("%c")}\n', "utf-8"))
            fil = open('index.html', 'rb')
            dat = fil.read()  # dat is a bytestring value
            fil.close()
            self.wfile.write(bytes(f'Content-Length: {len(dat)}\n', "utf-8"))
            self.wfile.write(b"Content-Type: text/html; charset=UTF-8\n")
            self.wfile.write(b"Set-Cookie: Chocolate Chip=yes\n")
            self.wfile.write(b"Set-Cookie: Snickerdoodle=Of course\n")
            self.wfile.write(b"Set-Cookie: Oatmeal Raisin=I guess... grandma\n")
            self.wfile.write(b"\n")
            self.wfile.write(dat)

        elif self.path == '/search.html':
            self.wfile.write(b"HTTP/1.0 200 OK\n")
            self.wfile.write(b"Server: Erik's Cool Server\n")
            self.wfile.write(bytes(f'Date: {strftime("%c")}\n', "utf-8"))
            fil = open('search.html', 'rb')
            dat = fil.read()  # dat is a bytestring value
            fil.close()
            self.wfile.write(bytes(f'Content-Length: {len(dat)}\n', "utf-8"))
            self.wfile.write(b"Content-Type: text/html; charset=UTF-8\n")
            self.wfile.write(b"\n")
            self.wfile.write(dat)

        elif self.path == "/index" or self.path == "/index.html":
            self.wfile.write(b"HTTP/1.0 307 Temporary Redirect\n")
            self.wfile.write(b"Server: Erik's Cool Server\n")
            self.wfile.write(bytes(f'Date: {strftime("%c")}\n', "utf-8"))
            self.wfile.write(b"Location: /\n")
            self.wfile.write(b"\n")

        elif self.path == "/exit":
            self.wfile.write(b"HTTP/1.0 307 Temporary Redirect\n")
            self.wfile.write(b"Server: Erik's Cool Server\n")
            self.wfile.write(bytes(f'Date: {strftime("%c")}\n', "utf-8"))
            self.wfile.write(b"Content-Type: text/html; charset=UTF-8\n")
            self.wfile.write(b"Location: /\n")
            self.wfile.write(b"\n")
            exit(0)

        elif self.path == "/recursion":
            self.wfile.write(b"HTTP/1.0 307 Temporary Redirect\n")
            self.wfile.write(b"Server: Erik's Cool Server\n")
            self.wfile.write(bytes(f'Date: {strftime("%c")}\n', "utf-8"))
            self.wfile.write(b"Content-Type: text/html; charset=UTF-8\n")
            self.wfile.write(b"Location: /recursion\n")
            self.wfile.write(b"\n")

        elif self.path.startswith("/level"):
            self.wfile.write(b"HTTP/1.0 307 Temporary Redirect\n")
            self.wfile.write(b"Server: Erik's Cool Server\n")
            self.wfile.write(bytes(f'Date: {strftime("%c")}\n', "utf-8"))
            self.wfile.write(b"Content-Type: text/html; charset=UTF-8\n")
            n = self.path[6:]
            if n.isdigit():
                n = int(n)
                self.wfile.write(bytes(f"Location: /level{n+1}\n", "utf-8"))
            else:
                self.wfile.write(b"Location: /level0\n")
            self.wfile.write(b"\n")

        elif self.path == "/52-Anchor.jpg":
            self.wfile.write(b"HTTP/1.0 200 OK\n")
            self.wfile.write(b"Server: Erik's Cool Server\n")
            self.wfile.write(bytes(f'Date: {strftime("%c")}\n', "utf-8"))
            self.wfile.write(b"Content-Type: image/jpeg; charset=UTF-8\n")  # MIME type
            self.wfile.write(b"Cache-Control: max-age=5\n")
            fil = open('52-Anchor.jpg', 'rb')
            dat = fil.read()  # dat is a bytestring value
            fil.close()
            self.wfile.write(bytes(f'Content-Length: {len(dat)}\n', "utf-8"))
            self.wfile.write(b"\n")
            self.wfile.write(dat)

        elif self.path == "/favicon.ico":
            self.wfile.write(b"HTTP/1.0 200 OK\n")
            self.wfile.write(b"Server: Erik's Cool Server\n")
            self.wfile.write(bytes(f'Date: {strftime("%c")}\n', "utf-8"))
            self.wfile.write(b"Content-Type: image/x-icon; charset=UTF-8\n")  # MIME type
            self.wfile.write(b"Cache-Control: max-age=5\n")
            fil = open('favicon.ico', 'rb')
            dat = fil.read()  # dat is a bytestring value
            fil.close()
            self.wfile.write(bytes(f'Content-Length: {len(dat)}\n', "utf-8"))
            self.wfile.write(b"\n")
            self.wfile.write(dat)

        elif self.path == "/style.css":
            self.wfile.write(b"HTTP/1.0 200 OK\n")
            self.wfile.write(b"Server: Erik's Cool Server\n")
            self.wfile.write(bytes(f'Date: {strftime("%c")}\n', "utf-8"))
            self.wfile.write(b"Content-Type: text/css; charset=UTF-8\n")  # MIME type
            self.wfile.write(b"Cache-Control: max-age=5\n")
            fil = open('style.css', 'rb')
            dat = fil.read()  # dat is a bytestring value
            fil.close()
            self.wfile.write(bytes(f'Content-Length: {len(dat)}\n', "utf-8"))
            self.wfile.write(b"\n")
            self.wfile.write(dat)

        else:
            self.wfile.write(b"HTTP/1.0 404 Not Found\n")
            self.wfile.write(b"Server: Erik's Cool Server\n")
            self.wfile.write(bytes(f'Date: {strftime("%c")}\n', "utf-8"))
            self.wfile.write(b"Content-Type: text/html; charset=UTF-8\n")
            fil = open('404.html', 'rb')
            dat = fil.read()  # dat is a bytestring value
            fil.close()
            self.wfile.write(bytes(f'Content-Length: {len(dat)}\n', "utf-8"))
            self.wfile.write(b"\n")
            self.wfile.write(dat)

    def do_POST(self):
        print(f"The browser made a POST request to {self.path}")
        # print("it sent these headers:")
        # for header in self.headers:
        #     print(f"\t{header} => {self.headers[header]}")

        redirect_to = "/search.html"
        if 'Content-Length' in self.headers:
            print("There are", self.headers['Content-Length'], "bytes in this payload")
            size = int(self.headers['Content-Length'])
            payload = self.rfile.read(size).decode(encoding="ascii")
            print(f"The payload is {payload}")
            for pair in payload.split('&'):
                pair = pair.split('=')
                print(f"\tthe pair is {pair}")
                # Easter Egg
                if pair[0] == "Nancy" and len(pair) > 1 and pair[1].lower() == "home":
                    redirect_to = "/"


        self.wfile.write(b"HTTP/1.0 303 See Other\n")
        self.wfile.write(b"Server: Erik's Cool Server\n")
        self.wfile.write(bytes(f'Date: {strftime("%c")}\n', "utf-8"))
        self.wfile.write(b"Content-Type: text/html; charset=UTF-8\n")
        self.wfile.write(bytes(f"Location: {redirect_to}\n", "utf-8"))
        self.wfile.write(b"\n")



if __name__ == '__main__':
    server_address = ('localhost', 8000)
    print(f"Serving from http://{server_address[0]}:{server_address[1]}")
    print("Press Ctrl-C to quit\n")
    try:
        HTTPServer(server_address, CS2610Assn1).serve_forever()
    except KeyboardInterrupt:
        print(" Exiting")
        exit(0)
