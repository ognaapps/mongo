# MongoDB Docker Compose for Ogna

A Docker Compose configuration for running MongoDB in the Ogna development environment.

## Prerequisites

- Docker (version 20.10 or higher)
- Docker Compose (version 2.0 or higher)

## Quick Start

1. Clone this repository:

```bash
git clone https://github.com/ognaapps/mongo.git
cd mongo
```

2. Start MongoDB:

```bash
docker-compose up -d
```

3. Verify MongoDB is running:

```bash
docker-compose ps
```

## Configuration

### Default Settings

- **MongoDB Version**: [specify version]
- **Port**: 27017
- **Database Name**: [specify if applicable]
- **Data Persistence**: Data is stored in a Docker volume to persist across container restarts

### Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

Available environment variables:

- `MONGO_INITDB_ROOT_USERNAME`: MongoDB root username (default: admin)
- `MONGO_INITDB_ROOT_PASSWORD`: MongoDB root password (default: changeme)
- `MONGO_INITDB_DATABASE`: Initial database name

## Connecting to MongoDB

### From Host Machine

```bash
mongosh "mongodb://admin:changeme@localhost:27017"
```

### From Another Docker Container

```bash
mongodb://admin:changeme@mongo:27017
```

### Connection String for Applications

```
mongodb://admin:changeme@localhost:27017/your_database?authSource=admin
```

## Management

### Start Services

```bash
docker-compose up -d
```

### Stop Services

```bash
docker-compose down
```

### View Logs

```bash
docker-compose logs -f
```

### Backup Database

```bash
docker-compose exec mongo mongodump --out /backup
```

### Restore Database

```bash
docker-compose exec mongo mongorestore /backup
```

## Volumes

Data is persisted in the following Docker volume:

- `mongo-data`: MongoDB database files

## Security Notes

⚠️ **Important**: Change default credentials before deploying to production!

- Update `MONGO_INITDB_ROOT_PASSWORD` in your `.env` file
- Consider implementing network restrictions
- Enable authentication in production environments

## Troubleshooting

### Container won't start

- Check if port 27017 is already in use: `lsof -i :27017`
- View container logs: `docker-compose logs mongo`

### Permission Issues

- Ensure Docker has proper permissions to create volumes
- Check volume permissions: `docker volume inspect mongo_mongo-data`

### Connection Refused

- Verify MongoDB is running: `docker-compose ps`
- Check firewall settings
- Ensure you're using correct credentials

## Development

This configuration is optimized for development environments. For production deployments, consider:

- Enabling replica sets
- Configuring authentication properly
- Setting up backups
- Implementing monitoring
- Using secrets management

## License

[Specify your license]

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Support

For issues and questions:

- Open an issue on [GitHub](https://github.com/ognaapps/mongo/issues)
- Contact the Ogna team

---

Made with ❤️ by the Ogna team
