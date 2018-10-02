Run:
1. `npm start`
2. `node api`
3. Then run `node test`, see output to console:
```
  NOT CACHED: url: http://localhost:8080/, status: 200
  NOT CACHED: url: http://localhost:3003/method, status: 200
  NOT CACHED: url: http://localhost:3003/method, status: 200
```
4. Uncomment piece of code in `test.js`
5. Then run `node test` again, see changed output to console:
```
  NOT CACHED: url: http://localhost:8080/, status: 200
  NOT CACHED: url: http://localhost:3003/method, status: 200
  NOT CACHED: url: http://localhost:3003/method, status: 304
```