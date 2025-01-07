//NOT SOLID COMPLAINT

interface Builder {
    setParams(params: Record<string, string>): Builder;
    setQueryParams(queryParams: Record<string, string>): Builder;
    setUrl(baseUrl: string): Builder;
    build(): string;
  }
  
  class UrlBuilder implements Builder {
    private baseUrl: string = '';
    private queryParams: Record<string, string> = {};
    private params: Record<string, string> = {};
  
    setParams(params: Record<string, string>): Builder {
      this.params = { ...this.params, ...params };
      return this;
    }
  
    setQueryParams(queryParams: Record<string, string>): Builder {
      this.queryParams = { ...this.queryParams, ...queryParams };
      return this;
    }
  
    setUrl(baseUrl: string): Builder {
      this.baseUrl = baseUrl;
      return this;
    }
  
    build(): string {
      let url = this.baseUrl;
  
      // Add path parameters
      for (const [key, value] of Object.entries(this.params)) {
        url = url.replace(`:${key}`, value);
      }
  
      // Add query parameters
      const queryString = Object.entries(this.queryParams)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
      if (queryString) {
        url += `?${queryString}`;
      }
  
      return url;
    }
  }
  
  // Usage Example
  const url = new UrlBuilder()
    .setUrl('https://api.example.com/users/:userId/orders/:orderId')
    .setParams({ userId: '123', orderId: '456' })
    .setQueryParams({ sort: 'desc', limit: '10' })
    .build();
  
  console.log(url);
  // Output: https://api.example.com/users/123/orders/456?sort=desc&limit=10
  