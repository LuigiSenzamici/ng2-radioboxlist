import { EventEmitter } from '@angular/core';
export declare class RadioBoxList {
    list: any[];
    title: string;
    id: string;
    value: string;
    styles: any;
    theme: string;
    _selected: any;
    selected: EventEmitter<any>;
    containerClasses: string[];
    titleClasses: string[];
    inputClasses: string[];
    labelClasses: string[];
    private readSetting(value);
    private setClass(compo, values);
    private removeClass(compo, value);
    private clickManage(id);
}
