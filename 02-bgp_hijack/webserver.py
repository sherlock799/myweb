import argparse

from http.server import HTTPServer, BaseHTTPRequestHandler
import json

parser = argparse.ArgumentParser()
parser.add_argument('--text', default="Default web server")
FLAGS = parser.parse_args()

class Handler(BaseHTTPRequestHandler):
    # Disable logging DNS lookups
    def address_string(self):
        return str(self.client_address[0])

    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()
        self.wfile.write(("<h1>%s</h1>\n" % FLAGS.text).encode())
        self.wfile.flush()

host = ('', 80)
httpd = HTTPServer(host, Handler)
httpd.serve_forever()
