defmodule SocketWeb.JoinChannel do
  use SocketWeb, :channel

  @impl true
  def join("join:lobby", _payload, socket) do
    {:ok, socket}
  end

  @impl true
  def handle_in("shout", payload, socket) do
    {username} = payload

    position = {
      x: :rand.uniform(1000),
      y: :rand.uniform(1000),
    }

    IO.puts({username: username, position})

    broadcast(socket, "shout", {username: username, position})
    {:noreply, socket}
  end
end
