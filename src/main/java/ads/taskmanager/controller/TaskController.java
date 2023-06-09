package ads.taskmanager.controller;

import java.util.List;

import ads.taskmanager.entity.Task;
import ads.taskmanager.repository.ITaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class TaskController {
	
	@Autowired
	private ITaskRepository eRepo;
	
	@GetMapping({"/tasks", "/list","taskslist"})
	public ModelAndView mostrartasks() {
		ModelAndView mav = new ModelAndView("tasks-list");
		List<Task> list =  eRepo.findAll();
		mav.addObject("task", list);
		return mav;
	}
	
	@GetMapping("/addtaskForm")
	public ModelAndView addtaskForm() {
		ModelAndView mav = new ModelAndView("add-task-form");
		Task novoTask = new Task();
		mav.addObject("task", novoTask);
		return mav;
	}
	
	@PostMapping("/salvartask")
	public String salvartask(@ModelAttribute Task task) {
		eRepo.save(task);
		return "redirect:/list";
	}
	
	@GetMapping("/mostrarEdicoesForm")
	public ModelAndView mostrarEdicoesForm(@RequestParam Long id) {
		ModelAndView mav = new ModelAndView("add-task-form");
		Task task = eRepo.findById(id).get();
		mav.addObject("task", task);
		return mav;
	}
	
	@GetMapping("/apagartask")
	public String apagartask(@RequestParam Long id) {
		eRepo.deleteById(id);
		return "redirect:/list";
	}

	@GetMapping({"/login", "/"})
	public ModelAndView login() {
		ModelAndView mav = new ModelAndView("login");
		return mav;
	}

	@GetMapping("/cadastro")
	public ModelAndView cadastro() {
		ModelAndView mav = new ModelAndView("cadastro");
		return mav;
	}
}
