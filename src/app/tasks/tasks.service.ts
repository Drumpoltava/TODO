import {Injectable, signal, inject} from "@angular/core";
import {Task, TaskStatus} from "./task.model";
import {LoggingService} from "../logging.service";

// @Injectable({
//   providedIn: 'root'
// })
export class TasksService {
  private loggingService = inject(LoggingService);
  private tasks = signal<Task[]>([]);

  allTasks = this.tasks.asReadonly();

  addTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: "OPEN"
    }

    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
    this.loggingService.log('ADD TASK ' + taskData.title);
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTask) => oldTask.map((task) => task.id === taskId ? {...task, status: newStatus} : task));
    this.loggingService.log('CHANGED TASK STATUS ' + newStatus);
  }
}
