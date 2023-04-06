import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Dictionary, Meanings, Phonetics } from 'src/app/classes/dictionary';
import { ApiEndpointsService } from 'src/app/services/api-endpoints.service';
import { ApiHttpService } from 'src/app/services/api-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  public dontShow: boolean = true;
  public showInfo: boolean = true;

  public search: Dictionary[] = [];

  public phonetic: Phonetics[] = [];
  public phonetics: any[] = [];
  public phoneticText: any[] = [];
  public phoneticSound: any[] = [];
  public sound: any;

  public meaning: Meanings[] = [];

  public nounMeanin: Meanings[] = [];
  public verbMeanin: Meanings[] = [];
  public adjMeanin: Meanings[] = [];
  public advMeanin: Meanings[] = [];

  public synonyms: any[] = [];
  public antonyms: any[] = [];

  public searchForm: FormGroup;

  constructor(
    private http: ApiHttpService,
    private endpoint: ApiEndpointsService,
    private builder: FormBuilder
  ) {
    this.searchForm = this.builder.group({
      searchInput: ''
    });

    this.sound = '';

  }

  ngOnInit() {
    this.searchData;

  }


  searchData() {

    let searchInput = this.searchForm.get('searchInput')?.value;

    this.http.get(
      this.endpoint.getDataBySearch(searchInput)
    ).subscribe(
      res => {
        this.dontShow = false;

        this.search = res[0];

        this.phonetic = res[0].phonetics;

        this.meaning = res[0].meanings;

        this.nounMeanin = [];
        this.adjMeanin = [];
        this.advMeanin = [];
        this.verbMeanin = [];

        this.meaning.forEach(element => {
          if (element.partOfSpeech === 'noun') {

            let noun = {
              antonyms: element.antonyms,
              synonyms: element.synonyms,
              definitions: element.definitions,
              partOfSpeech: element.partOfSpeech
            }

            this.nounMeanin.push(noun);

          } else if (element.partOfSpeech === 'verb') {

            let verb = {
              antonyms: element.antonyms,
              synonyms: element.synonyms,
              definitions: element.definitions,
              partOfSpeech: element.partOfSpeech
            }

            this.verbMeanin.push(verb);

          } else if (element.partOfSpeech === 'adjective') {

            let adj = {
              antonyms: element.antonyms,
              synonyms: element.synonyms,
              definitions: element.definitions,
              partOfSpeech: element.partOfSpeech
            }

            this.adjMeanin.push(adj);

          } else if (element.partOfSpeech === 'adverb') {

            let adv = {
              antonyms: element.antonyms,
              synonyms: element.synonyms,
              definitions: element.definitions,
              partOfSpeech: element.partOfSpeech
            }

            this.advMeanin.push(adv);

          }

        })

        this.synonyms = [];

        this.meaning.forEach(element => {

          if(element.synonyms.length !== 0) {
            let syn = {
              synonyms: element.synonyms,
            }

            this.synonyms.push(syn);
          }
          
        })

        this.antonyms = [];

        this.meaning.forEach(element => {

          if(element.antonyms.length !== 0) {
            let ant = {
              antonyms: element.antonyms,
            }

            this.antonyms.push(ant);
          }
          
        })

        res[0].phonetics.forEach((element: any) => {
          if (element.audio != undefined && element.audio != '') {

            this.phoneticSound = [];

            let obj = {
              "audio": element.audio
            }
            this.phoneticSound.push(obj);
            this.sound = this.phoneticSound[0].audio;

          }


        });


      },
      (err: any) => {
        console.log(err);
      },
      () => {

      }
    )

  }

  playSound() {
    let audio = new Audio();
    audio.src = this.sound;
    audio.load();
    audio.play();
  }

}
