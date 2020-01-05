const https = require('https');
const urllib = require('url');


var request = {
    
    ajax: function(type,url,data,headers){
        return new Promise((resolv,reject) =>{
            const endpoint              = urllib.parse(url);
            headers['User-Agent']       = 'Nutritionix API/1.0.0',
            headers['Host']             = endpoint.hostname,
            headers['Accept']           = "*/*",
            headers['cache-control']    = "no-cache",
            type = type.toUpperCase();
            data = JSON.stringify(data);
            var options = {
                hostname: endpoint.hostname,
                port: 443,
                path: endpoint.path,
                method: type,
                headers: headers,
                
            }
            
            var req = https.request(options, (resp) => {
                let data = '';
                
                resp.on('data', (chunk) => {
                    data += chunk;
                });    
                
                resp.on('end', () => {
                    let json = JSON.parse(data);
                    
                    return resolv({
                        statusCode: resp.statusCode,
                        headers: resp.headers,
                        response: json
                    });
                });

            });

            req.on("error", (err) => {
                return reject({ error: err });
            });

            if (['POST'].includes(type)) {
                req.write(data)
            }
            req.end();
        });
    }
}
module.exports = request;