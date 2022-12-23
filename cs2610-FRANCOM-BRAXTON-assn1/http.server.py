from http.server import HTTPServer, BaseHTTPRequestHandler

class CS2610Assn1(BaseHTTPRequestHandler):

    def do_GET(self):
        #print(f"The browser made a GET request to {self.path}")

        if self.path == '/index.html':
            self.sendHeaders("text/html", "200")
            self.openFile("index.html")
        elif self.path == "/about.html":
            self.sendHeaders("text/html", "200")
            self.openFile("about.html")
        elif self.path == "/techtips+css.html":
            self.sendHeaders("text/html", "200")
            self.openFile("techtips+css.html")
        elif self.path == "/techtips-css.html":
            self.sendHeaders("text/html", "200")
            self.openFile("techtips-css.html")
        elif self.path == "/plan.html":
            self.sendHeaders("text/html", "200")
            self.openFile("plan.html")
        elif self.path == "/style.css":
            self.sendHeaders("text/css", "200")
            self.openFile("style.css")
        elif self.path == "/debugging" or self.path == "debugging.html":
            self.sendHeaders("text/html", "200")
            self.end_headers()

            stringOfStuff = ""
            for header in self.headers:
                stringOfStuff += f"<li>{header} -->   {self.headers[header]}</li>"

            self.wfile.write(bytes(f"""<!DOCTYPE html>
                            <html lang="en">
                                <head>
                                    <meta charset="utf-8" />
                                    <link rel="stylesheet" href="style.css" type="text/css" />
                                    <title>debugging.html</title>
                                </head>
                                <body>
                                    <h2>{BaseHTTPRequestHandler.version_string(self)}<h2>
                                    <h2>{BaseHTTPRequestHandler.date_time_string(self)}<h2>
                                    <h2>{self.client_address}<h2>
                                    <h2>{self.path}<h2>
                                    <h2>{self.requestline}<h2>
                                    <h2>{self.request_version}<h2>
                                    <ol>
                                        {stringOfStuff}
                                    <ol>
                                </body>
                            </html>\n""", "utf-8"))

        ## Redirects ##
        elif self.path == "/" or self.path == "/index":
            self.sendHeaders("text/html", "301")
            self.send_header("Location", "/index.html")
            self.end_headers()
            self.openFile("index.html")
        elif self.path.startswith("/bio") or self.path == "/about":
            self.sendHeaders("text/html", "301")
            self.send_header("Location", "/about.html")
            self.end_headers()
            self.openFile("about.html")
        elif self.path == "/tips" or self.path == "/help" or self.path == "/techtips-css":
            self.sendHeaders("text/html", "301")
            self.send_header("Location", "/techtips-css.html")
            self.end_headers()
            self.openFile("techtips-css.html")
        elif self.path == "/techtips+css":
            self.sendHeaders("text/html", "301")
            self.send_header("Location", "/techtips+css.html")
            self.end_headers()
            self.openFile("techtips+css.html")
        elif self.path == "/plan":
            self.sendHeaders("text/html", "301")
            self.send_header("Location", "/plan.html")
            self.end_headers()
            self.openFile("plan.html")

        ## Images ##
        elif self.path == "/shrek.jpg":
            self.sendHeaders("image.jpeg", "200")
            self.openFile("shrek.jpg")
        elif self.path == "/ballshrek.jpg":
            self.sendHeaders("image.jpeg", "200")
            self.openFile("ballshrek.jpg")
        elif self.path == "/weddingshrek.jpg":
            self.sendHeaders("image.jpeg", "200")
            self.openFile("weddingshrek.jpg")
        elif self.path == "/favicon.ico":
            self.sendHeaders("image/x-icon", "200")
            self.openFile("favicon.ico")

        ##Other codes(418, 403, 404)##
        elif self.path == "/teapot" or self.path == "/teapot.html":
            self.sendHeaders("text/html", "418")
            self.end_headers()
            self.wfile.write(b"""<!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="utf-8" />
                        <link rel="stylesheet" href="style.css" type="text/css" />
                        <title>template.html</title>
                    </head>
                    <body>
                        <p>This is my<p>
                        <p>short and stout<p>
                        <p>HTML document<p>
                        <p><a href="/index.html">Return Home<a><p>
                    </body>
                </html>\n""")

        elif self.path == "/forbidden" or self.path == "/forbidden.html":
            self.sendHeaders("text/html", "403")
            self.end_headers()
            self.wfile.write(b"""<!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="utf-8" />
                        <link rel="stylesheet" href="style.css" type="text/css" />
                        <title>template.html</title>
                    </head>
                    <body>
                        <p>Error code: 403<p>
                        <p>Message: Forbidden.<p>
                        <p>Error code explanation: 403 - Request forbidden -- authorization will not help.\n</p>
                        <p>Error Joke: What do you tell a hacker after a bad breakup? --> There are plenty of phish in the sea!<p>
                        <p><a href="/index.html">Return Home<a><p>
                    </body>
                </html>\n""")

        else:
            self.send_error(404, "Not Found", "There ain't no resources available at this here path")
            self.sendHeaders("text/html", "404")
            self.end_headers()


    def openFile(self, string):
        file = open(string, 'rb')
        openedFile = file.read()
        file.close()
        self.send_header("Content-Length", f"{len(openedFile)}")
        self.end_headers()
        self.wfile.write(openedFile)

    def sendHeaders(self, contentType, statusCode):
        if statusCode == "200":
            self.send_response(200, "OK")
            self.send_header("Content-type", f"{contentType}; charset=utf-8")
        elif statusCode == "301":
            self.send_response(301, "Temporary Redirect")
        elif statusCode == "418":
            self.send_response(418, "I'm a teapot")
            self.send_header("Content-type", f"{contentType}; charset=utf-8")
        elif statusCode == "403":
            self.send_response(403, "Forbidden")
            self.send_header("Content-type", f"{contentType}; charset=utf-8")
        else: #Handles all 404 codes
            self.send_response(404, "Not Found")
            self.send_header("Content-type", f"{contentType}; charset=utf-8")

        self.send_header("Server", "Braxton's dope server")
        self.send_header("Date", self.date_time_string())
        self.send_header("Connection", "close")
        self.send_header("Cache-Control", "max-age=5")

if __name__ == '__main__':
    server_address = ('localhost', 8000)
    print(f"Serving from http://{server_address[0]}:{server_address[1]}")
    print("Press Ctrl-C to quit\n")
    try:
        HTTPServer(server_address, CS2610Assn1).serve_forever()
    except KeyboardInterrupt:
        print(" Exiting")
        exit(0)