#!/bin/bash
set -e

echo "Starting SSH ..."
#service ssh start

echo "Starting supervisord with dotnet core webapp and HypernovaComponentServer"
/usr/bin/supervisord --configuration /etc/supervisor/conf.d/supervisord.conf
