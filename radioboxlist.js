var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
let RadioBoxList = class RadioBoxList {
    constructor() {
        this.title = '';
        this.id = '';
        this.value = '';
        this.selected = new EventEmitter();
        this.containerClasses = ['container-struct', 'container-base'];
        this.titleClasses = ['title-struct'];
        this.inputClasses = [];
        this.labelClasses = [];
    }
    set styles(values) {
        if (typeof values === 'string') {
            let r = this.readSetting(values);
            this.setClass(r.compo, r.values);
        }
        if (Array.isArray(values)) {
            values.forEach(e => {
                let r = this.readSetting(e);
                this.setClass(r.compo, r.values);
            });
        }
    }
    set theme(value) {
        if (value) {
            this.removeClass('all', null);
            this.setClass('container', ['container-' + value]);
            this.setClass('title', ['title-' + value]);
            this.setClass('input', ['input-' + value]);
            this.setClass('label', ['label-' + value]);
        }
    }
    readSetting(value) {
        let c = value.split(":");
        let v = c[1].split(",");
        let res = {
            compo: c[0],
            values: v
        };
        return res;
    }
    setClass(compo, values) {
        switch (compo) {
            case 'container':
                values.forEach(e => this.containerClasses.push(e.trim()));
                break;
            case 'title':
                values.forEach(e => this.titleClasses.push(e.trim()));
                break;
            case 'input':
                values.forEach(e => this.inputClasses.push(e.trim()));
                break;
            case 'label':
                values.forEach(e => this.labelClasses.push(e.trim()));
                break;
        }
    }
    removeClass(compo, value) {
        switch (compo) {
            case 'container':
                this.containerClasses.splice(this.containerClasses.indexOf(value), 1);
                break;
            case 'title':
                this.titleClasses.splice(this.titleClasses.indexOf(value), 1);
                break;
            case 'input':
                this.inputClasses.splice(this.inputClasses.indexOf(value), 1);
                break;
            case 'label':
                this.labelClasses.splice(this.labelClasses.indexOf(value), 1);
                break;
            case 'all': {
                this.containerClasses = ['container-struct'];
                this.titleClasses = ['title-struct'];
                this.inputClasses = [];
                this.labelClasses = [];
            }
        }
    }
    clickManage(id) {
        let ids = "radiob-" + id;
        let nodo = (document.getElementById(ids));
        if (nodo) {
            let sel = nodo.checked;
            if (sel) {
                let res = {
                    tagId: ids,
                    value: id,
                    text: this.list.filter(e => e.id == id)[0][this.value]
                };
                this._selected = res;
                this.selected.emit(this._selected);
                return;
            }
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], RadioBoxList.prototype, "list", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], RadioBoxList.prototype, "title", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], RadioBoxList.prototype, "id", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], RadioBoxList.prototype, "value", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], RadioBoxList.prototype, "styles", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], RadioBoxList.prototype, "theme", null);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], RadioBoxList.prototype, "selected", void 0);
RadioBoxList = __decorate([
    Component({
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
        styles: [`
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
], RadioBoxList);
export { RadioBoxList };
