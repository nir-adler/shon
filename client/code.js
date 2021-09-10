const form = document.querySelector('form')
const input = form.querySelector('input')
const text1=document.querySelector('#text-1')
const text2=document.querySelector('#text-2')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    let value = input.value
    const url = 'http://server:8081/value'
    console.log(value)
    try {
        text1.innerText='Loding'
        text2.innerText=''
        fetch(url, {
            method: 'POST',
            json: true,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({value})
        })
            .then((response) => {
                return response.json()
            })
            .then(data =>{
                console.log(data)
                text1.innerText='value: '+data[0] +'\n' + data[2]
                text2.innerText='result: '+data[1]
            })
    } catch (e) {
        console.log(e)
        text1.innerText='Error'
        text2.innerText=e.message
    }
})