const btn = document.getElementById('btn');

btn.addEventListener('click', async () => {
  const page = document.getElementById('page').value;
  const limit = document.getElementById('limit').value;
  document.querySelector('.message').innerHTML = "";

  if ((Number(page) > 10 || Number(page) < 1) && (Number(limit) > 10 || Number(limit) < 1)) {
    let div = document.createElement('div');
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    div.className = "alert alert-danger";
    p1.innerHTML = "Номер страницы вне диапазона от 1 до 10.";
    p2.append("Лимит вне диапазона от 1 до 10.");
    div.append(p1, p2);
    document.querySelector('.message').append(div);
  }
  else if ((Number(page) > 10 || Number(page) < 1) && (Number(limit) <= 10 && Number(limit) >= 1)) {
    let div = document.createElement('div');
    let p = document.createElement("p");
    div.className = "alert alert-danger";
    p.innerHTML = "Номер страницы вне диапазона от 1 до 10.";
    div.append(p);
    document.querySelector('.message').append(div);
  }
  else if ((Number(page) <= 10 || Number(page) >= 1) && (Number(limit) > 10 || Number(limit) < 1)) {
    let div = document.createElement('div');
    let p = document.createElement("p");
    div.className = "alert alert-danger";
    p.innerHTML = "Лимит вне диапазона от 1 до 10.";
    div.append(p);
    document.querySelector('.message').append(div);
  }
  else {
    let div = document.createElement('div');
    div.className = "alert alert-success";
    div.innerHTML = "Запрос отправлен";
    document.querySelector('.message').append(div);

    console.log('start');

    document.querySelector('.message').innerHTML = "";

    const useRequest = () => {
      return fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
        .then((response) => {
          console.log('response', response);
          return response.json();
        })
        .then((json) => { return json; })
        .catch(() => { console.log('error', response) });
    };
  
    const requestResult = await useRequest();
    document.querySelector('.response').append(requestResult);
    console.log('requestResult', requestResult);

    for (let x in requestResult) {
      document.querySelector('.response').innerHTML=`<img src=\"${requestResult[x].url}\" width=\"${requestResult[x].width}\" height=\"${requestResult[x].height}\">`;
      console.log(x + ": "+ requestResult[x].url)
    }
    console.log('end');
    }
});
