from main import get_service_status


def test_get_service_status_returns_ok_status() -> None:
    status = get_service_status()

    assert status["service"] == "plant-aj-backend"
    assert status["status"] == "ok"
    assert "timestamp" in status
