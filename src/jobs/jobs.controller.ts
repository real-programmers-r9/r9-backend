import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateJobDto } from "./dto/job.dto";
import { Job } from "./job.entity";
import { JobsService } from "./jobs.service";

@Controller("jobs")
@ApiTags("jobs")
export class JobsController {
	constructor(private jobsService: JobsService) {}

	@Post("createJob")
	createJob(@Body() createJobDto: CreateJobDto): Promise<Job> {
		return this.jobsService.createJob(createJobDto);
	}

	@Get("readAllJobs")
	getAllJobs() {
		return this.jobsService.readAllJobs();
	}

	@Get("readJobDetail/:id")
	readJobDetail(@Param("id") id: string): Promise<Job> {
		return this.jobsService.readJobDetail(id);
	}

	@Delete("deleteJob/:id")
	deleteJob(@Param("id") id: string): Promise<void> {
		return this.jobsService.deleteJob(id);
	}
}
