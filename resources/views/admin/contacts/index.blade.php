@extends('layouts.app')

@section('content')
    <header class="d-flex justify-content-between align-items-center">
       <h1>Lista contatti</h1>
   </header>

    <table class="table table-striped table-dark">
       <thead>
         <tr>
           <th scope="col">#</th>
           <th scope="col">Nome</th>
           <th scope="col">Email</th>
           <th scope="col">Telefono</th>
           <th scope="col">Data</th>
         </tr>
       </thead>
       <tbody>
           @forelse ($contacts  as $contact)
           <tr>
               <th scope="row">{{$contact->id}}</th>
               <td>{{$contact->name}}</td>
               <td>{{$contact->email}}</td>
               <td>{{$contact->phone}}</td>
               <td>{{$contact->created_at}}</td>
            </tr> 
           @empty
               <tr>
                   <td colspan="9">
                       <h3 class="text-center">Nessun messaggio</h3>
                   </td>
               </tr>
           @endforelse
       </tbody>
     </table>

     <nav class="mt-3">
       @if ($contacts->hasPages())
           {{$contacts->links()}}
       @endif
     </nav>
@endsection