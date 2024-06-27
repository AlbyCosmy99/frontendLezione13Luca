window.onload = () => {
    fetch('http://localhost:3000/api/users')
    .then(res => res.json())
    .then(res => {
        let bootstrapRow = document.querySelector('.row')
        bootstrapRow.innerHTML = res.map(elem => {
            return `<div class="col-lg-6 d-flex justify-content-center align-items-center mb-1 mt-1">
                        <div class="card" style="width: 18rem;">
                            <div class="card-header">
                              ${elem.name}
                            </div>
                            <ul class="list-group list-group-flush">
                              <li class="list-group-item">${elem.age}</li>
                            </ul>
                          </div>
                    </div>`
        }).join('')
    }) 
}