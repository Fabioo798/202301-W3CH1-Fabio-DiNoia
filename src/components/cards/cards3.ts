export const createCard3 = () => {
  let charactersList: any = document.querySelector('.characters-list');
  let li = document.createElement('li');
  li.classList.add('character', 'col');

  let divCard = document.createElement('div');
  divCard.classList.add('card', 'character__card');

  let img = document.createElement('img');
  img.src = '/media/no-one.jpg';
  img.alt = 'Nombre y familia del personaje';
  img.classList.add('character__picture', 'card-img-top');

  let cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  let h2 = document.createElement('h2');
  h2.classList.add('character__name', 'card-title', 'h4');
  h2.innerText = 'Nombre y familia';

  let divInfo = document.createElement('div');
  divInfo.classList.add('character__info');

  let ul = document.createElement('ul');
  ul.classList.add('list-unstyled');

  let liAge = document.createElement('li');
  liAge.innerText = 'Edad: X años';

  let liStatus = document.createElement('li');
  liStatus.innerHTML =
    "Estado: <i class='fas fa-thumbs-down'></i><i class='fas fa-thumbs-up'></i>";

  ul.appendChild(liAge);
  ul.appendChild(liStatus);

  divInfo.appendChild(ul);
  cardBody.appendChild(h2);
  cardBody.appendChild(divInfo);
  divCard.appendChild(img);
  divCard.appendChild(cardBody);
  li.appendChild(divCard);
  charactersList.appendChild(li);
};
