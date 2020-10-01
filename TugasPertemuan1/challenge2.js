const challenge2 = () => {
    const nama = "Muhamad Irham Maulana";
    console.log("Nama : "+nama);

    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then( res => {
        const filterData = res.data.filter( value => {
            return value.userId == 8;
        });
        console.log(filterData);
    })
}
challenge2();