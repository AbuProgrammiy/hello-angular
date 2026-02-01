import { HttpParams } from '@angular/common/http';

export function buildHttpParams(
  request?: Record<string, any>,
  parentKey = '',
  params: HttpParams = new HttpParams()
): HttpParams {
  if (!request) {
    return params;
  }

  Object.entries(request).forEach(([key, value]) => {
    if (value === null || value === undefined) {
      return;
    }

    const paramKey = parentKey ? `${parentKey}.${key}` : key;

    if (Array.isArray(value)) {
      value.forEach(v => {
        if (v !== null && v !== undefined) {
          params = params.append(paramKey, v.toString());
        }
      });
    } else if (typeof value === 'object') {
      params = buildHttpParams(value, paramKey, params);
    } else {
      params = params.set(paramKey, value.toString());
    }
  });

  return params;
}
