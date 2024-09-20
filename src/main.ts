import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import {TasksService} from "./app/tasks/tasks.service";
import {InjectionToken} from "@angular/core";

export const TasksServiceToken = new InjectionToken<TasksService>('tasks-service-token');

bootstrapApplication(AppComponent, {providers: [{provide: TasksServiceToken, useClass: TasksService}]}).catch((err) => console.error(err));
