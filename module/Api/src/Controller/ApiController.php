<?php
/**
 * Created by Alpha-Hydro.
 * @link http://www.alpha-hydro.com
 * @author Vladimir Mikhaylov <admin@alpha-hydro.com>
 * @copyright Copyright (c) 2017, Alpha-Hydro
 *
 */

namespace Api\Controller;


use Api\Model\GreetingsTable;
use Zend\Mvc\Controller\AbstractRestfulController;
use Zend\View\Model\JsonModel;

class ApiController extends AbstractRestfulController
{

    private $table;

    public function __construct(GreetingsTable $table)
    {
        $this->table = $table;
    }

    public function indexAction()
    {
        $id = (int) $this->params()->fromRoute('id', 0);
        $greeting = $this->table->getGreeting($id);

        return new JsonModel((array)$greeting);
    }
}