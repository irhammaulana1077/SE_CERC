const challenge1 = () => {
    const nama = "Muhamad Irham Maulana";
    console.log("Nama : "+nama);
    
    axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then( res => {
        const isiComments = res.data;
        const jumlahComments = isiComments.length;
        console.log("Jumlah Comments : "+jumlahComments);
        console.log(isiComments);
    })
}

challenge1();
