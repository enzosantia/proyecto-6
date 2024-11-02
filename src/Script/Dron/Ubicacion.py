from pyparrot.Minidrone import Mambo

# Inicializa el dron
mambo = Mambo("533198", use_wifi=True)

# Conectar al dron
success = mambo.connect(num_retries=3)
if success:
    print("Conectado al dron")
else:
    print("No se pudo conectar al dron")
    exit()

try:
    # Actualizar los datos de sensores
    mambo.smart_sleep(2)  # Esperar un poco para obtener datos de telemetría
    mambo.ask_for_state_update()

    # Obtener la posición actual
    position = mambo.sensors.sensors_dict  # Obtener todos los datos del sensor
    print("Ubicación actual del dron:", position)

finally:
    # Desconectar
    mambo.disconnect()
    print("Desconectado del dron")
