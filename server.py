#!/usr/bin/env python3
"""
HORECA Gurus Local Server
Zero-dependency Python 3 HTTP Server with REST API Endpoints and Static File Serving.
"""

import http.server
import socketserver
import json
import os
import sys

PORT = 8000
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

class HorecaGurusHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def end_headers(self):
        # Enable CORS and caching headers
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200, "ok")
        self.end_headers()

    def do_GET(self):
        if self.path == '/api/health':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            response = {
                "status": "healthy",
                "service": "HORECA Gurus Supply Engine",
                "version": "1.0.0",
                "regions": ["Nairobi", "Nyandarua", "Mwea", "Oloitokitok", "Kisumu"]
            }
            self.wfile.write(json.dumps(response).encode('utf-8'))
            return

        super().do_GET()

    def do_POST(self):
        if self.path == '/api/orders':
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            try:
                order_payload = json.loads(post_data.decode('utf-8'))
                order_id = f"ORD-{os.urandom(3).hex().upper()}"
                response = {
                    "status": "success",
                    "orderId": order_id,
                    "message": "Purchase order successfully received by Nairobi Dispatch Hub.",
                    "data": order_payload
                }
                self.send_response(201)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps(response).encode('utf-8'))
            except Exception as e:
                self.send_response(400)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode('utf-8'))
            return

        self.send_response(404)
        self.end_headers()

def run(port=PORT):
    # Allow port reuse immediately
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", port), HorecaGurusHandler) as httpd:
        print("=" * 65)
        print("🌿 HORECA GURUS B2B PLATFORM")
        print("=" * 65)
        print(f"🚀 Server running locally at: http://localhost:{port}")
        print("📦 Serving Kitchen Storefront, Market Intelligence & Leads CRM")
        print("Press Ctrl+C to stop the server.")
        print("=" * 65)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer shutting down gracefully.")
            sys.exit(0)

if __name__ == '__main__':
    run()
