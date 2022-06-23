import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [];
  animalDetails = '';
  
  
  showAge(animal: Animal){
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`;
  }
  constructor(private listService: ListService) {
    this.getAnimals(); // carrega os animais
   }

  removeAnimal(animal: Animal){ // remove um animal da lista
    //console.log("removendo o animal: ", animal);
    this.animals = this.animals.filter((a) => animal.name !== a.name); // exclui apenas no front
    //this.listService.remove(animal.id).subscribe;
    //this.animals = this.listService.remove(this.animals, animal);
  }

  ngOnInit(): void {
  }

  getAnimals(): void { // realiza uma requisicao http para obter os animais do servidor(db.json)
    this.listService.getAll().subscribe(animals => this.animals = animals); // subscribe para receber os dados no servidor
  }

}
