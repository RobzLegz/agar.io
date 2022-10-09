defmodule SocketWeb.UserSocket do
  use Phoenix.Socket

  channel "upload:*", SocketWeb.UploadChannel
  channel "move:*", SocketWeb.MoveChannel
  channel "eat:*", SocketWeb.EatChannel
  channel "join:*", SocketWeb.JoinChannel
  channel "game:*", SocketWeb.GameChannel

  @impl true
  def connect(_params, socket, _connect_info) do
    {:ok, socket}
  end

  @impl true
  def id(_socket), do: nil

  def on_disconnect(pid) do
    IO.puts("#{pid}'s socket disconnected")
  end
end
