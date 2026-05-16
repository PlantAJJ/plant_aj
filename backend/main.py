from datetime import datetime, timezone


def get_service_status() -> dict[str, str]:
    return {
        "service": "plant-aj-backend",
        "status": "ok",
        "timestamp": datetime.now(timezone.utc).isoformat(),
    }


def main() -> None:
    status = get_service_status()
    print(f"{status['service']} is {status['status']} at {status['timestamp']}")


if __name__ == "__main__":
    main()
