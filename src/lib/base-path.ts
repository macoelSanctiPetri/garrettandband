const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const basePath = rawBasePath.endsWith('/') ? rawBasePath.slice(0, -1) : rawBasePath;

export const withBasePath = (path: string) => {
  if (!path) {
    return basePath || '';
  }
  if (path.startsWith('/')) {
    return `${basePath}${path}`;
  }
  return `${basePath}/${path}`;
};
