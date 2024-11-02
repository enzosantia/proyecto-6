from pyparrot.Minidrone import Mambo
import time

# Inicializa el dron
mambo = Mambo(533198, use_wifi=True)

# Conectar al dron
success = mambo.connect(num_retries=3)
if success:
    print("Conectado al dron")
else:
    print("No se pudo conectar al dron")
    exit()

try:
    # Despegar
    print("Despegando...")
    mambo.takeoff()
    time.sleep(5)  # Mantiene el dron en el aire por 5 segundos

    # Mover el dron hacia adelante
    print("Moviendo hacia adelante...")
    mambo.fly_direct(roll=0, pitch=50, yaw=0, vertical_movement=0, duration=2)  # Reduce el pitch

    time.sleep(3)  # Espera un momento antes de aterrizar

    # Aterrizar
    print("Aterrizando...")
    mambo.land()

finally:
    # Desconectar
    mambo.disconnect()
    print("Desconectado del dron")
