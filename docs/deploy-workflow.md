# Flujo de publicación

Orden de trabajo habitual:

1. Hacemos los cambios de código y revisamos si quieres añadir algo más.
2. Cuando me confirmes que no hay más cambios, ejecuto la `build`.
3. Tú subes `out/` al servidor por WinSCP.
4. Después preparo el commit del código fuente en `main`.
5. Si quieres conservar el export exacto publicado, actualizamos la rama `out-backup`.

Comandos útiles:

```powershell
npm run build
```

```powershell
.\scripts\publish-out-backup.ps1
```

Notas:

- `main` guarda el código fuente.
- `out-backup` guarda snapshots del contenido exportado en `out/`.
- Antes de lanzar `build`, te consultaré si quieres hacer algún cambio más.
