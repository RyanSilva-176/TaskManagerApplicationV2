package ads.taskmanager.repository;

import ads.taskmanager.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ITaskRepository extends JpaRepository<Task, Long> {

}
