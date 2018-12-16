docker run -dt -v "%APPDATA%\ASP.NET\Https:/root/.aspnet/https:ro" -v "%APPDATA%\Microsoft\UserSecrets:/root/.microsoft/usersecrets:ro" -e "ASPNETCORE_ENVIRONMENT=Production" -e "ASPNETCORE_URLS=https://+:443;http://+:80" -e "ASPNETCORE_HTTPS_PORT=443" -p 80:80 -p 443:443 -p 8080:8080 webapp:latest
