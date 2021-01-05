
datas.forEach((data) => {
    const card = document.querySelector('.row');
    card.innerHTML +='<div class="card"><div class="card-body"><p>'+data.album.title+'</p><img src="'+data.album.cover+'"><audio controls <src="'+data.preview+'"></audio><p>'+parseInt(data.duration/60)+' heures '+data.duration%60+' minutes</p></div></div>';

    
    // console.log(data.album.title);
    // console.log(data.preview);
    // console.log(data.album.cover);
    // console.log(data.duration/60+' heures');
});

