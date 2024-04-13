import express from 'express';
import { taskModule } from '../../modules/tasks/task.module'
import { adapRouterExpress } from '../../adapters/express.adapter'

const router = express.Router();

router.post('/', adapRouterExpress(taskModule, 'create'));
router.get('/', adapRouterExpress(taskModule, 'read'));
router.put('/:id', adapRouterExpress(taskModule, 'update'));
router.delete('/:id', adapRouterExpress(taskModule, 'delete'));

export default router;
