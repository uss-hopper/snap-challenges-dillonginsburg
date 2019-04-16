drop table if exists Task;

create table Task (
	taskId binary(16) not null,
	taskTitle varchar(256) not null,
	taskStartDate datetime,
	taskDueDate datetime,
	taskStatus varchar(64) not null,
	taskPriority varchar(64) not null,
	taskDescription varchar(256),
		primary key (taskId)
);