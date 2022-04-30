<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\RoleResource;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class RolesController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware(['role:admin|god']);
        
        $this->authorizeResource(Role::class, 'role');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $roles = QueryBuilder::for(Role::class) 
                ->allowedFilters([
                    'name',
                    AllowedFilter::exact('id'),
                ])
                ->allowedIncludes(['permissions'])
                ->defaultSort('id')
                ->get();
        

        return RoleResource::collection($roles);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  Spatie\Permission\Models\Role  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Role $role)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Spatie\Permission\Models\Role  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Role $role)
    {
        
        $permissions = collect($request->input('permissions'));
        $role->syncPermissions($permissions->pluck('id'));
        
        return new RoleResource($role);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Spatie\Permission\Models\Role  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Role $role)
    {
        //
    }
}
