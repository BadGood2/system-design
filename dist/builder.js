"use strict";
class UrlBuilder {
    constructor() {
        this.baseUrl = '';
        this.queryParams = {};
        this.params = {};
    }
    setParams(params) {
        this.params = Object.assign(Object.assign({}, this.params), params);
        return this;
    }
    setQueryParams(queryParams) {
        this.queryParams = Object.assign(Object.assign({}, this.queryParams), queryParams);
        return this;
    }
    setUrl(baseUrl) {
        this.baseUrl = baseUrl;
        return this;
    }
    build() {
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
