defmodule SocketWeb.EatChannel do
  use SocketWeb, :channel

  @impl true
  def join("eat:lobby", _payload, socket) do
    {:ok, socket}
  end

  @impl true
  def handle_in("shout", payload, socket) do
    broadcast(socket, "shout", payload)
    {:noreply, socket}
  end
end
