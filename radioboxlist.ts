import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
    selector: 'radiobox-list',
    template: `
    <div [ngClass]="containerClasses">
        <div [ngClass]="titleClasses">{{title}}</div>
        <div *ngFor="let e of list">
        <input type="radio" [ngClass]="inputClasses" name="radiob" id="radiob-{{e[id]}}" value="{{e[id]}}" (click)="clickManage(e[id])" />
                                    <label [ngClass]="labelClasses"  for="radiob-{{e[id]}}">{{e[value]}}</label>
        </div>
    </div>
    `,
    styles:[`
        .container-struct{
            display: inline-block;
            padding: 10px;
        }
        .title-struct{
            text-align:center;
            font-weight: 700;
        }
        .container-base{
            border: 1px solid gray;
            border-radius: 5px;
            font-family:'Arial'
        }
    `]
})
export class RadioBoxList{
    @Input() list:any[];
    @Input() title:string = '';
    @Input() id:string= '';
    @Input() value:string= '';
    @Input() set styles(values){
        if(typeof values === 'string'){//setting "container:redClass, shadow";
            let r = this.readSetting(values);
            this.setClass(r.compo, r.values);
        }
        if(Array.isArray(values)){//setting ["container:greenClass, shadow", "title:whiteClass"]
            values.forEach(e=>{
                let r = this.readSetting(e);
                this.setClass(r.compo, r.values);
            });
        }
    }
    @Input() set theme(value:string){
        if(value){
            this.removeClass('all', null);
            this.setClass('container', ['container-' + value]);
            this.setClass('title', ['title-' + value]);
            this.setClass('input', ['input-' + value]);
            this.setClass('label', ['label-' + value]);
        }
    }
    _selected:any;
    @Output() selected:EventEmitter<any> = new EventEmitter<any>();

    containerClasses:string[] = ['container-struct', 'container-base'];
    titleClasses:string[] = ['title-struct'];
    inputClasses:string[] =[];
    labelClasses:string[] =[];
    private readSetting(value:string):any{
        let c:string[] = value.split(":");
        let v:string[] = c[1].split(",")
        let res = {
            compo:c[0],
            values:v
        }
        return res;
    }
    private setClass(compo:string, values:string[]){
        switch(compo){
            case 'container': values.forEach(e=>this.containerClasses.push(e.trim()));break;
            case 'title': values.forEach(e=>this.titleClasses.push(e.trim()));break;
            case 'input': values.forEach(e=>this.inputClasses.push(e.trim()));break;
            case 'label': values.forEach(e=>this.labelClasses.push(e.trim()));break;
        }
    }
    private removeClass(compo:string, value:string){
        switch(compo){
            case 'container': this.containerClasses.splice(this.containerClasses.indexOf(value), 1);break;
            case 'title': this.titleClasses.splice(this.titleClasses.indexOf(value), 1);break;
            case 'input': this.inputClasses.splice(this.inputClasses.indexOf(value), 1);break;
            case 'label': this.labelClasses.splice(this.labelClasses.indexOf(value), 1);break;
            case 'all':{
                this.containerClasses = ['container-struct'];
                this.titleClasses= ['title-struct'];
                this.inputClasses = [];
                this.labelClasses = [];
            }   
        }
    }
    
    private clickManage(id:string){
        let ids = "radiob-" + id;
        let nodo = (document.getElementById(ids)) as HTMLInputElement;
         if(nodo){
            let sel = nodo.checked;
            if(sel){
                let res ={
                    tagId: ids,
                    value: id,
                    text: this.list.filter(e=>e[this.id] == id)[0][this.value]
                }
                this._selected = res;
                this.selected.emit(this._selected);
                return;
            }
   
        }
        
    }

    
}