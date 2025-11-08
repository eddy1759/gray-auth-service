import os
import sys

def check_host_status(host_ip):
    """
    A utility function to ping a host and check if it's online.
    """
    print(f"Pinging {host_ip}...")
    os.system(f"ping -c 1 {host_ip}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        check_host_status(sys.argv[1])